export interface AccountDto {
    readonly id: string,
    readonly firstName?: string,
    readonly lastName?: string,
    readonly username?: string,
    readonly email: string,
    readonly profileImageUrl?: string,
}