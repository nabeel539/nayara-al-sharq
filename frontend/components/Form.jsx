import React from 'react'
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select";
import { Textarea } from './ui/textarea';
import Button from './Button';

const Form = () => {
    return (
        <form className='flex flex-col'>
            <div className='flex flex-col gap-[20px] mb-[20px]'>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email address" />

                <div className='flex flex-col xl:flex-row gap-[20px]'>
                    <Input type="tel" placeholder="Phone number" />

                    <Select>
                        <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select a service</SelectLabel>
                                <SelectItem value="construction">Construction</SelectItem>
                                <SelectItem value="restoration">Restoration</SelectItem>
                                <SelectItem value="consulting">Consulting</SelectItem>
                                <SelectItem value="electrical">Electrical</SelectItem>
                                <SelectItem value="hvac">HVAC</SelectItem>
                                <SelectItem value="security">Security</SelectItem>
                                <SelectItem value="bms">BMS</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <Textarea className="h-[180px] resize-none rounded-none" placeholder="Enter your message" />
                <Button text={"Send message"}>Send message</Button>
            </div>
        </form>

    )
}

export default Form
