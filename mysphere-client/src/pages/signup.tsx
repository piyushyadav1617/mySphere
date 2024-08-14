import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupPage() {
    return (
        <main className="container py-20">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="full-name">Full name</Label>
                            <Input id="full-name" placeholder="Piyush Yadav" required />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <Button type="submit" className="w-full">
                            Create an account
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold text-blue-400">
                            Login
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}
