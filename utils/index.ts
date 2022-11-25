type Name = {
    firstName: string,
    lastName: string
}

export const handleChangeNameInitials = ({ firstName, lastName } : Name) : string => {
    return `${firstName && firstName.charAt(0).toUpperCase()}${lastName && lastName.charAt(0).toUpperCase()}`
};