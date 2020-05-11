import { uuid } from 'uuidv4';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

class FakeUserTokensRepository implements IUserTokensRepository {
    private userTokens: UserToken[] = [];

    public async generate(user_id: string): Promise<UserToken> {
        const useToken = new UserToken();

        Object.assign(useToken, {
            id: uuid(),
            token: uuid(),
            user_id,
        });

        this.userTokens.push(useToken);

        return useToken;
    }
}

export default FakeUserTokensRepository;
