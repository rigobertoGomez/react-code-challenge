
export const formatDate = (date:string | Date) => {
    const currentDate = new Date(date)
    
    return currentDate.toLocaleString('en-US', 
        { year: 'numeric', month: 'long', day: 'numeric' }
    );
}