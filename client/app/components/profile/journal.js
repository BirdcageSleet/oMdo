var React = require('react');
var JournalEntry = require('./journalEntry');
// var JournalEntryContent = require('./journalEntryContent');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');
var Tile = require('../tile');

function Journal(props) {
  console.log('journal children ', this.props);
  return(
    <div>
      {props.entries.reverse().map(function(entry, i) {
        return (
          <JournalEntry
            entry={entry}
            key={i}
            onRevealDiary={props.onRevealDiary}
            hideEntry={props.hideEntry}
          />
        )
      })}
    </div>
  );
}

module.exports = styleable(css)(Journal);

// function Journal(props) {
//   console.log('journal children ', this.props);
//   return(
//     <div>
//       {props.entries.reverse().map(function(entry, i) {
//         return (
//           <JournalEntry
//             entry={entry}
//             key={i}
//             onRevealDiary={props.onRevealDiary}
//             hideEntry={props.hideEntry}
//           />
//         )
//       })}
//     </div>
//   );
// }



{/*diaryOpen={props.diaryOpen}*/}

// function Journal(props) {
//   console.log('outside the inside of the journal map ', props.entryIds);
//   return(
//     <div>
//       {props.entries.reverse().map(function(entry, i) {
//         console.log('inside the journal map ', props);
//         // console.log('inside the journal map ', props.entryIds[entry._id]);
//         // console.log('entry ids in the journal map ', props.entryIds);
//         // console.log('entry id in the journal map ', entry._id);
        
//         // if(props.entryIds[entry._id] === true) {

//           return (
            
//               <Tile>
//                 <JournalEntry
//                   entry={entry}
//                   key={i}
//                   onRevealDiary={props.onRevealDiary}
//                 />
//                 <JournalEntryContent
//                     entry={entry}
//                     key={entry._id}
//                     onRevealDiary={props.onRevealDiary}
//                     entryIds={props.entryIds}
//                 />
//               </Tile>
//           )
//         })}
//     </div>
//   );
// };

// module.exports = styleable(css)(Journal);



// {/*<Tile>
//                 <JournalEntry
//                   entry={entry}
//                   key={i}
//                   onRevealDiary={props.onRevealDiary}
//                 />
//                   <JournalEntryContent
//                     entry={entry}
//                     onRevealDiary={props.onRevealDiary}
//                   />
//               </Tile>  
//             }*/}
// // } else {
//         //   return (
            
//         //   )
//         // }
        

{/*diaryOpen={props.diaryOpen}*/}

{/*entryIds={props.entryIds}
            entryId={props.entryIds[entry._id]}*/}
