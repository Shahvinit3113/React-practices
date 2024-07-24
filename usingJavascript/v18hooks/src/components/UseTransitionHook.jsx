import React,{useState, useTransition} from 'react'

function UseTransitionHook() {

    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    const [isPending, startTransition] = useTransition()

    const handleClick = () => {
        // urgent update
        setCount(count + 1)

        // Transition Update
        startTransition(() => {
            const myArr = Array(20000).fill(1).map((el, i)=>(count + 20000) - i)

            setItems(myArr)
        })
        
    }

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
        {isPending ? <p>Loading ...</p> : null}
      <ul >
        {items.map(item => <li key={item}> {item}</li>)}
      </ul>
    </div>
  )
}

export default UseTransitionHook
