export const getInitialsByFullName = (fullName: string) => {
    if (!fullName) return ""
  
    const names = fullName.trim().split(/\s+/)
  
    if (names.length < 2) return names[0][0].toUpperCase()
  
    const firstNameInitial = names[0][0].toUpperCase()
    const secondNameInitial = names[1][0].toUpperCase()
  
    return `${firstNameInitial}${secondNameInitial}`
  }