
export const formatDate = (date:Date) => {
    const currentDate = new Date(date)
    
    return currentDate.toLocaleString('en-US', 
        { year: 'numeric', month: 'long', day: 'numeric' }
    );
}