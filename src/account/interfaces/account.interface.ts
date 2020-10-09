export interface Account {
    readonly id: string,
    readonly firstName?: string,
    readonly lastName?: string,
    readonly username?: string,
    readonly email: string,
    readonly profileImageUrl?: string,
    readonly createdAt: Date,
    readonly updatedAt: Date
}