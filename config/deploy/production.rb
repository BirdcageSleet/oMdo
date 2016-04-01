set :branch, 'master'
set :application, 'skynet'
set :repo_url, 'git@github.com:BirdcageSleet/oMdo.git'
set :deploy_to, '/var/www/skynet'
set :ssh_options, { :forward_agent => true }
set :stage, :production

server 'ec2-54-213-68-115.us-west-2.compute.amazonaws.com', user: 'ec2-user', roles: %w{web app}
