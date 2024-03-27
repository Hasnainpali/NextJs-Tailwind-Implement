  "use client"
 import React,{useState} from 'react'
 
 export default function Dragdrop() {
    const [fileList, setFileList] = useState([])

    const handleDrop =(e)=>{
         e.preventDefault()
         const files = Array.from(e.dataTransfer.files)
         setFileList([...fileList,...files])
    }
    const fileChange =(e)=>{
        const files = Array.from(e.target.files)
        setFileList([...fileList, ...files])
    }
  
    const formatFileSize = (size)=>{
        if(size === 0 ) return "0 Bytes";
        const unit = ["Bytes", "TB", "GB","MB","KB"]
        const i = Math.floor(Math.log(size) / Math.log(1024));
        return `${parseFloat((size / Math.pow(1024, i)).toFixed(2))} ${unit[i]}`
    }
    const handleDownload = (file) => {
            const url = URL.createObjectURL(file);
            const a = document.createElement('a')
            a.href = url;
            a.download = file.name;
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
      };

      const closeFile = (index)=>{
        const upDatefile = [...fileList];
        upDatefile.splice(index, 1)
        setFileList(upDatefile)                       
      }

   return (
     <div className='min-h-screen flex flex-col items-center justify-center bg-blue-500'>
        <div className='container w-auto h-64 md:w-1/2 h-64 border-2 border-dashed border-gray-300 rounded-lg shadow-lg'>
            <div className="flex flex-col justify-center items-center text-center p-10 text-xl font-semibold cursor-pointer"
             onDragOver={(e)=> e.preventDefault()} 
             onDrop={handleDrop} >
               <div className="flex items-center justify-center">
                 <img src="/images/cloud-computing.png" alt="" width={100} />
               </div>
               <label htmlFor='upload'>Click to upload</label>
                <input type="file" id="upload" style={{ display: 'none' }} onChange={fileChange}/>
                 <span> Drag and Drop file here</span>
            </div>
        </div>
        <ul className='w-full md:w-1/2 mt-4 border-2 border-gray-300 rounded-lg shadow-lg px-2 '>
          {fileList.map((file,index)=>{
           return(
             <li className="flex items-center py-5 border-b-2 relative " key={index} >
                {file.type.startsWith('images/')?(
                    <img src={URL.createObjectURL(file)} alt="" className="rounded-full object-cover mr-2"width={40} />
                ):(
                    <img src="/images/txt.png" alt="" className="rounded-full object-cover mr-2"width={40} />
                )}
                  <div className="flex flex-col flex-grow">
                    <span className='font-semibold'>{file.name}</span>
                    <span className='text-sm text-gray-300 mr-2 '>{formatFileSize(file.size)}</span>
                  </div>
                  <div className="absolute top-1 right-0">
                    
                       <img src="/images/close.png" alt="" width={15} 
                       onClick={()=> closeFile(index)} />
                    
                  </div>
                <button className='bg-blue-500 px-2 rounded-lg text-md font-semibold '
                onClick={() => handleDownload(file)}
                disabled={fileList.length === 0}>Download</button>
             </li>
           ) 
          })}
       </ul>
     </div>
   )
 }
 