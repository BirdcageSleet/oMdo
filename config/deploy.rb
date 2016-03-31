# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'skynet'
set :repo_url, 'git@github.com:jsoo1/oMdo.git'
set :user, 'ec2-user'

namespace :deploy do

  desc "Stop Forever"
  task :started do
    on roles(:app) do
      execute "forever stopall"
    end
  end

  desc "Install node modules and build with webpack"
  task :npm_install do
    on roles(:app) do
      execute "cd #{current_path} && npm install --production;"
    end
  end

  desc "CP .env to skynet directory"
  task :dotenv do
    on roles(:app) do
      execute "cp ~/.env #{current_path} && sudo iptables-restore < ~/iptables.oMdo"
    end
  end

  desc "Restart application"
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute "cd #{current_path} && forever start -l oMdo.log -a server/server.js", raise_on_non_zero_exit: false
    end
  end

  after :published, 'deploy:npm_install'
  before :finished, 'deploy:dotenv'
  after :finished, 'deploy:restart'
end
