// import React from "react";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { format } from "date-fns";

// const DatePicker = (city: any) => {
//   const [date, setDate] = React.useState<Date | undefined>();

//   return (
//     <Dialog>
//       <DialogTrigger>{city.name}</DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Travel to {city.name}</DialogTitle>
//         </DialogHeader>
//         <Popover>
//           <PopoverTrigger asChild>
//             <button className="btn btn-primary">
//               {date ? (
//                 <span>From: {format(date, "PPP")}</span>
//               ) : (
//                 <span>Pick a date</span>
//               )}
//             </button>
//           </PopoverTrigger>
//           <PopoverContent className="w-auto p-0" align="start">
//             <Calendar
//               mode="single"
//               selected={date}
//               onSelect={setDate}
//               className="rounded-md border"
//             />
//           </PopoverContent>
//         </Popover>
//         <Popover>
//           <PopoverTrigger asChild>
//             <button className="btn btn-primary">
//               {date ? (
//                 <span>To: {format(date, "PPP")}</span>
//               ) : (
//                 <span>Pick a date</span>
//               )}
//             </button>
//           </PopoverTrigger>
//           <PopoverContent className="w-auto p-0" align="start">
//             <Calendar
//               mode="single"
//               selected={date}
//               onSelect={setDate}
//               className="rounded-md border"
//             />
//           </PopoverContent>
//         </Popover>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default DatePicker;
