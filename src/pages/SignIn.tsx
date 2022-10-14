import { FormEvent, useState } from 'react';
import { Logo } from '../Logo';
import { Checkbox } from '../components/Checkbox';
import { EnvelopeSimple, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { TextInput } from '../components/TextInput';
import { Text } from '../components/Text';
import axios from 'axios';

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        await axios.post('/sessions', {
            email: 'samuel.jansem@gmail.com',
            password: '12345678',
        });

        setIsUserSignedIn(true);
    }

    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
            <header className="flex flex-col items-center">
                <Logo />
                <Heading size="lg" className="mt-4">
                    Ignite Lab
                </Heading>
                <Text size="lg" className="text-gray-400 mt-1">
                    Faça login e comece a usar!
                </Text>
            </header>
            <form
                className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
                onSubmit={handleSignIn}
            >
                {isUserSignedIn && <Text>Login realizado</Text>}

                <label htmlFor="email" className="flex flex-col gap-3">
                    <Text className="font-semibold">Endereço de e-mail</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <EnvelopeSimple />
                        </TextInput.Icon>
                        <TextInput.Input
                            id="email"
                            placeholder="Digite seu e-mail"
                        />
                    </TextInput.Root>
                </label>
                <label htmlFor="password" className="flex flex-col gap-3">
                    <Text className="font-semibold">Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input
                            id="password"
                            type="password"
                            placeholder="************"
                        />
                    </TextInput.Root>
                </label>

                <label htmlFor="remember" className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Text size="sm" className="text-gray-200">
                        Lembrar de mim por 30 dias
                    </Text>
                </label>

                <Button type="submit" className="mt-4">
                    Entrar na plataforma
                </Button>

                <footer className="flex flex-col items-center gap-4 mt-8">
                    <Text
                        size="sm"
                        className="text-gray-400 underline cursor-pointer hover:text-gray-200"
                    >
                        <a href="#">Esqueceu sua senha?</a>
                    </Text>
                    <Text
                        size="sm"
                        className="text-gray-400 underline cursor-pointer hover:text-gray-200"
                    >
                        <a href="#">Não possui conta? Crie uma agora!</a>
                    </Text>
                </footer>
            </form>
        </div>
    );
}