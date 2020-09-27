export interface Account {
    readonly accountId: number,
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly password: string,
    readonly profileImageUrl: string,
    readonly createdAt: string,
    readonly updatedAt: string
}