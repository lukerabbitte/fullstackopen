import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {

  const contextValue = {
    message: "Hi from MyContextProvider",
  }

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}

const MessageLevelOne = ({ msg }) => {
  return (
    <div>
      <MessageLevelTwo msg = {msg}/>
    </div>
  )
}

const MessageLevelTwo = ({ msg }) => {
  return (
    <div>
      <MessageLevelThree msg = {msg}/>
    </div>
  )
}

const MessageLevelThree = ({ msg }) => {

  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>
        { msg } - from message level three fella
      </p>
      <p>
        Or, I can use context to say {contextValue.message}
      </p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Util random no generator
  const randomNumber = (max, min) => (Math.floor(Math.random() * (max - min + 1) + min))
  console.log(2);

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const mostVotedIndex = votes.indexOf(Math.max(...votes)); // prob not super efficient but clean

  return (
    <MyContextProvider>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>Votes: {votes[selected]}</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={() => setSelected(randomNumber(anecdotes.length - 1, 0))}>New one</button>

        <p> Anecdote with most votes: {anecdotes[mostVotedIndex]}</p>
        <MessageLevelOne msg="I am your father!"/>
      </div>
    </MyContextProvider>
  )
}

export default App