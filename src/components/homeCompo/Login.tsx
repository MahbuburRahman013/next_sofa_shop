"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import toast from 'react-hot-toast';


export function Login() {

const handleSignUp = (e:any)=> {
    e.preventDefault()
    const form = e.target
    const name = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
        name,
        email, 
        password
    }

    axios.post('http://localhost:5000/jwt', userData).then(res=> {
        if(res.data.token){
            localStorage.setItem('token',res.data);
        }else{
         toast.error(res.data.message)
        }
        
    })

}

const handleSignIn = (e:any)=> {
    e.preventDefault()
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
        email, 
        password
    }

    axios.post('http://localhost:5000/login', userData).then(res=> {
        if(res.data.success){
            toast.success(res.data.success)
        }else{
         toast.error(res.data.error)
        }
    })

}


    return (
        <div className="grid grid-cols-2 gap-2">

            <Sheet>
                <SheetTrigger asChild>
                    <FaUserCircle></FaUserCircle>
                </SheetTrigger>

                <SheetContent side={'bottom'}>

                    <div className="w-full flex justify-center items-center">
                        <Tabs defaultValue="account" className="lg:w-[40%] md:w-[80%] w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="signin">Sign In</TabsTrigger>
                                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                            </TabsList>
                            <TabsContent value="signin">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Sign In</CardTitle>
                                        <CardDescription>
                                            Sign in your account here. Click Sign In when you are done.
                                        </CardDescription>
                                    </CardHeader>
                                    <form onSubmit={handleSignIn}>
                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="username">Email</Label>
                                                <Input id="username" name="email" placeholder="Email" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="username">Password</Label>
                                                <Input id="username" name="password" placeholder="Password" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button type="submit">Sign In</Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </TabsContent>
                            <TabsContent value="signup">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Sign Up</CardTitle>
                                        <CardDescription>
                                            Create your account here. Click Sign Up when you are done.
                                        </CardDescription>
                                    </CardHeader>
                                    <form onSubmit={handleSignUp}>
                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input type="text" id="name" name="userName" placeholder="Enter Your Name" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="username">Email</Label>
                                                <Input type="email" id="username" name="email" placeholder="Email" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="username">Password</Label>
                                                <Input type="password" id="username" name="password" placeholder="Password" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button type="submit">Sign Up</Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                </SheetContent>
            </Sheet>

        </div>
    )
}