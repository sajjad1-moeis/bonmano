import React from "react";
import {MdOutlineCheck} from "react-icons/md";
import {Card, Typography, Progress, Button, Tooltip} from "@material-tailwind/react";
import {MdDelete} from "react-icons/md";
import {FaPencil} from "react-icons/fa6";
const TABLE_HEAD = ["نام و نام خانوادگی", "درخاست برای خرید", "مبلغ", "فعالیت", "نوع"];

const TABLE_ROWS = [
   {name: "محمد عیدی", categories: "قهوه عربیکا 1", price: 550000, color: "blue", value: 50},
   {name: "محمد عزیزی", categories: "قهوه عربیکا 2", price: 560000, color: "red", value: 70},
   {name: "محمد معین فرد", categories: "قهوه عربیکا 3", price: 570000, color: "green", value: 30},
   {name: "محمد هرازی", categories: "قهوه عربیکا 4", price: 520000, color: "amber", value: 90},
   ,
];
export function Table({arrHead, arrBody, deleteData, isPoduct}) {
   return (
      <Card className='h-full w-full rounded-md  overflow-auto bg-[#21222D] text-white'>
         <table className='w-full min-w-max table-auto text-left' dir='rtl'>
            <thead>
               <tr>
                  {arrHead.map((head, index) => (
                     <th key={index} className='border-b border-gray-700 text-right bg-[#282a39] p-4'>
                        <Typography variant='small' color='white' className='font-normal leading-none opacity-70'>
                           {head}
                        </Typography>
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {arrBody &&
                  arrBody.map(({_id, name, categories, price, color, value}, index) => {
                     return (
                        <tr key={index} className='text-white text-right'>
                           <td className='p-5 border-b border-gray-800'>{name}</td>
                           <td className='p-5 border-b border-gray-800 '>s</td>
                           <td className='p-5 border-b border-gray-800'>{price.toLocaleString()}</td>
                           <td className='p-5 border-b border-gray-800'>{isPoduct ? "" : <Progress value={value} color={color} />}</td>
                           <td className='p-5 border-b border-gray-800 w-max'>
                              {isPoduct ? (
                                 <div className='flex gap-3'>
                                    <Tooltip content='حذف' size='sm' className=' text-[10px]'>
                                       <Button className='p-0 text-xl text-white' variant='text' onClick={() => deleteData(_id)}>
                                          <MdDelete />
                                       </Button>
                                    </Tooltip>
                                    <Tooltip content='ویرایش' size='sm' className=' text-[10px]'>
                                       <Button className='p-0 text-base text-white' variant='text'>
                                          <FaPencil />
                                       </Button>
                                    </Tooltip>
                                 </div>
                              ) : (
                                 <Tooltip content='تایید' placement='left'>
                                    <Button
                                       className='p-3 text-xl bg-gray-1000'
                                       onClick={() => {
                                          console.log("object");
                                       }}
                                    >
                                       <MdOutlineCheck />
                                    </Button>
                                 </Tooltip>
                              )}
                           </td>
                        </tr>
                     );
                  })}
            </tbody>
         </table>
      </Card>
   );
}

export default function TableUsers() {
   return <Table arrHead={TABLE_HEAD} arrBody={TABLE_ROWS} />;
}
