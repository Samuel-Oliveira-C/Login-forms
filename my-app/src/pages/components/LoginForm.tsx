import Link from "next/link"

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
import { useCallback, useState } from "react"

export function LoginForm() {
    // States
    const[email,setEmail] = useState("");
    const[senha,setSenha] = useState("");
    // useCallbacks
    const cbSetEmail = useCallback((text:React.ChangeEvent<HTMLInputElement>) => setEmail(text.target.value),[]);
    const cbSetSenha = useCallback((text:React.ChangeEvent<HTMLInputElement>) => setSenha(text.target.value) , [])
    return (
        <Card className="mx-auto max-w-sm">
        <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
            Coloque sua senha e email abaixo
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(key)=> cbSetEmail(key)}
                required
                />
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                    Esqueceu sua Senha?
                </Link>
                </div>
                <Input id="password" 
                    type="password" required 
                    value={senha}
                    onChange={(key) => cbSetSenha(key)}
                    />
            </div>
            <Button type="submit" className="w-full">
                Login
            </Button>
            <Button variant="outline" className="w-full">
                Login com sua conta Google
            </Button>
            </div>
            <div className="mt-4 text-center text-sm">
            Não tem conta ainda?{" "}
            <Link href="#" className="underline">
                click aqui
            </Link>
            </div>
        </CardContent>
        </Card>
    )
    }
