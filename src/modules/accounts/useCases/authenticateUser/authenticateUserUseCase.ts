import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/appError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // Usuário existe:
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Email or password incorrect!");
        }

        // Senha está correta:
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Email or password incorrect!");
        }

        // Gerar jsonwebtoken:
        const token = sign({}, "04a0f6a1637a4ed918d375b5ec4200fe", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
