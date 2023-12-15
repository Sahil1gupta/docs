import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card(props) {
  return (
    <motion.div drag dragConstraints={props.reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="relative flex-shrink-0 w-60 h-72 rounded-[45px]  bg-zinc-900/90 text-white px-8  py-10 overflow-hidden">
        <FaRegFileAlt></FaRegFileAlt>
        <p className='text-sm mt-5 leading-tight font-semibold'>{props.data.desc}</p>
        <motion.div className='footer absolute bottom-0  w-full  left-0 w-full '>
            <div className='flex justify-between items-start mb-3 px-8 py-3'>
                <h5>{props.data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {/* conditional rendering */}
                {props.data.close ?<IoMdClose />: <LuDownload size='0.7em' color='#000'></LuDownload>}  
               
                </span>
            </div>
            {/* download vala show krna hai ki nahi */}
            {
                props.data.tag.isOpen && ( <div className={`tag w-full py-4 ${props.data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{props.data.tag.tagTitle}</h3>
            </div>)
            }
          
        </motion.div>
    
    </motion.div>
    
  )
}

export default Card