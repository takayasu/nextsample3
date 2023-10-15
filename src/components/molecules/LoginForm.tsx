
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const LoginForm = () => {
    return (
        <div className="m-4">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>ログイン</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid items-center w-full gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="mail">ID(メールアドレス)</Label>
                                <Input id="mail" placeholder="xxx@example.com" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">パスワード</Label>
                                <Input id="password" type="password" /> 
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="tenant">所属組織</Label>
                                <Select>
                                    <SelectTrigger id="tenant">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="tenant1">テナント１</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-rows justify-items-right">
                    <Button>Login</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default LoginForm;