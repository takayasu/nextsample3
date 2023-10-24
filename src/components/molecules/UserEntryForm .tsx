import { Controller, useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label";
import DataField from "../atoms/DateField";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { Alert, AlertTitle } from "../ui/alert";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import ja from 'date-fns/locale/ja'

export type UserInfo = {
    id: string;
    password: string;
    confirmpassword: string;
    birthday: Date;
};

export type UserEntryFormProps = {
    setUserInfo: (userInfo: UserInfo) => void;
};

const UserEntryForm = (props: UserEntryFormProps) => {

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm({
        defaultValues: {
            id: "",
            password: "",
            confirmpassword: "",
            birthday: new Date(),
        }
    });

    const onSubmit = (data) => {
        props.setUserInfo(data);
    };

    const onError = (errors, e) => console.log(errors, e);

    return (
        <div className="m-4">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>ユーザ登録</CardTitle>
                    <CardDescription>初めての方は登録をお願いします</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className="grid items-center w-full gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="mail">ID(メールアドレス)</Label>
                                <Controller name="id" control={control}
                                    rules={{
                                        required: "Emailは必須です",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Emailの形式で入力してください",
                                        },
                                    }}
                                    render={({ field }) => {
                                        return (
                                            <Input {...field} placeholder="xxx@example.com" />
                                        )
                                    }} />
                                {errors.id &&
                                    <Alert>
                                        <AlertTitle className="text-red-400">{errors.id.message}</AlertTitle>
                                    </Alert>
                                }
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">パスワード</Label>
                                <Controller name="password" control={control}
                                    rules={{
                                        required: "パスワードは必須です",
                                        minLength: {
                                            value: 8,
                                            message: "パスワードは8文字以上です",
                                        },
                                    }}
                                    render={({ field }) => {
                                        return (
                                            <Input {...field} placeholder="パスワード" type="password"/>
                                        )
                                    }} />
                                {errors.password &&
                                    <Alert>
                                        <AlertTitle className="text-red-400">{errors.password.message}</AlertTitle>
                                    </Alert>
                                }
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirmpassword">パスワード(確認)</Label>
                                <Controller name="confirmpassword" control={control}
                                    rules={{
                                        required: "パスワード(確認)は必須です",
                                        validate: (value) => {
                                            return value === getValues("password") || "パスワードが一致しません";
                                        },
                                    }}
                                    render={({ field }) => {
                                        return (
                                            <Input {...field} placeholder="パスワード" type="password" />
                                        )
                                    }} />
                                {errors.confirmpassword &&
                                    <Alert>
                                        <AlertTitle className="text-red-400">{errors.confirmpassword.message}</AlertTitle>
                                    </Alert>
                                }
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="birthday">生年月日</Label>
                                <Controller name="birthday" control={control}

                                    render={({ field }) => {
                                        return (
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}>
                                                        {field.value ? format(field.value, 'yyyy年MM月dd日', { locale: ja }) : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                                                </PopoverContent>
                                            </Popover>
                                        )
                                    }} />
                            </div>
                            <Button type="submit">登録</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div >
    );
};

export default UserEntryForm;