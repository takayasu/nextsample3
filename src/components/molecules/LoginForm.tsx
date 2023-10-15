
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
import { useForm } from "react-hook-form"

const LoginForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({defaultValues: {tenant: "tenant1"}});

    const onSubmit = (data) => {
        console.log(data);
    };

    const onError = (errors, e) => console.log(errors, e);

    return (
        <div className="m-4">
            <Card className="w-[350px]">
                <form onSubmit={handleSubmit(onSubmit,onError)}>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>ログイン</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid items-center w-full gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="mail">ID(メールアドレス)</Label>
                                <Input {...register('id')} id="mail" placeholder="xxx@example.com" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">パスワード</Label>
                                <Input {...register('password')} id="password" type="password" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="tenant">所属組織</Label>
                                <Input  {...register('tenant')} id="tenant" />
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter className="flex flex-rows justify-items-right">
                        <Button type="submit">Login</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

export default LoginForm;