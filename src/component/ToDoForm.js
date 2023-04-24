import React from 'react';
import './style.css';

const today = new Date().toISOString().substr(0, 10);
document.getElementById("myDate").value = today;


export const ToDoForm = () => {
    return (
        <div>
            <form className='TodoForm'>
                <h3>New Task</h3>
                <div>
                    <input type='text' className='todo-input' placeholder='Add new task ...' />
                </div>
                <div>
                    <h4 className='des-tit'>Description</h4>
                    <textarea className='todo-des' rows='15' cols='80'></textarea>
                </div>
                <div className='due-pio'>
                    <div className='todo-due'>
                        <h4 className='due-tit'>Due Date</h4>
                        <input type='date' className='todo-due1' id='myDate'/>
                    </div>

                    <div className='todo-pio'>
                        <h4 className='pio-tit'>Piority</h4>
                        <select id="inputState" className='todo-pio1'>
                            <option>Low</option>
                            <option selected>Normal</option>
                            <option>High</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add</button>
                </div>

            </form>
        </div>

    )
}