import { useState } from "react";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";

const DataField = (props: any) => {
    const [date,setDate] = useState(new Date());
    return (
        <div>
            <Input placeholder="入力してください" value={date}/>
            <Calendar mode="single" date={date} onSelect={setDate} />
        </div>
    );
};

export default DataField;