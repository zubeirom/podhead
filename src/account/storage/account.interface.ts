export interface Account {
    readonly firstName: string,
    readonly lastName: string,
    readonly username?: string,
    readonly email: string,
    readonly password: string,
    readonly profileImageUrl: string,
    readonly createdAt: string,
    readonly updatedAt: string
}