import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import ClickAwayListener from 'react-click-away-listener';
import { Dropdown } from "flowbite-react";

type Props = {
    label: string,
    onFilter?: Function,
}

function FilterForm({label, onFilter}: Props){

    const [open, setOpen] = useState(false);

    return (
       <div className="flex items-center gap-3 relative">
            {label}
           <Dropdown label={<BsFilter className='text-lg cursor-pointer'/>} arrowIcon={false} inline={true} >
                <form className='p-5 text-base font-normal flex flex-col gap-3 min-w-[250px]'>
                    <div className="">
                        <label htmlFor="org" className='block capitalize'>Organization</label>
                        <select name="" id="" className='w-full px-3 py-2 rounded-lg bg-transparent border'>
                            <option value="">Select</option>
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="org" className='block capitalize'>Username</label>
                        <input type="text" className='w-full px-3 py-2 rounded-lg bg-transparent border' placeholder='usmaarn' />
                    </div>
                    <div className="">
                        <label htmlFor="org" className='block capitalize'>Email</label>
                        <input type="text" className='w-full px-3 py-2 rounded-lg bg-transparent border' placeholder='usmaarn@test.com' />
                    </div>
                    <div className="">
                        <label htmlFor="org" className='block capitalize'>Date</label>
                        <input type="date" name="" id="" className='w-full px-3 py-2 rounded-lg bg-transparent border' />
                    </div>

                    <div className="">
                        <label htmlFor="org" className='block capitalize'>phone number</label>
                        <input type="text" className='w-full px-3 py-2 rounded-lg bg-transparent border' placeholder='usmaarn@test.com' />
                    </div>

                        <div className="">
                        <label htmlFor="org" className='block capitalize'>Status</label>
                        <select name="" id="" className='w-full px-3 py-2 rounded-lg bg-transparent border'>
                            <option value="">Select</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-5">
                        <button className='py-2 border rounded-lg'>Reset</button>
                        <button className='py-2 bg-secondary rounded-lg text-white'>Filter</button>
                    </div>
                </form>
            </Dropdown>
        </div>
    )
}

export default FilterForm;