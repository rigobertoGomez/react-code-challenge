
// Enums
enum UserType {
    ADMIN,
    CANDIDATE
}

export type User = {
    avatar: string
    createdAt: string
    email: string
    fullName: string
    id: string
    type: UserType
    updatedAt: string
  }