import { WindowControls } from '#components'
import { techStack } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react'
import React from 'react'

const Terminal = () => {
  return (
    <>
        <div id='window-header'>
            <WindowControls target="terminal" />
            <h1>Tech Stack</h1>   
            </div>

            <div className='techstack'>
                <p>
                    <span className='font-bold'>@jannik % </span>
                    show tech stack
                </p>
                <div className='label'>
                    <p className='w-32'>Category</p>
                    <p>Technologies</p>
                </div>

                <ul className='content'>
                    {techStack.map(({category, items}) => (
                        <li key={category} className='flex items-center'>
                          <Check className='check' size={20} />
                          <h3>Category</h3>
                          <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}{index < items.length - 1 ? ',' : ''}</li>
                            ))}
                          </ul>
                        </li>
                    ))}
                </ul>

                <div className='footnote'>
                    <p>
                        <Check size={20} /> 5 of 5 stack loaded successfully (100%)
                    </p>

                    <p className='text-black'>
                        <Flag size={15} fill='black' />
                        Render time: 6ms
                    </p>
                </div>
            </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal")

export default TerminalWindow