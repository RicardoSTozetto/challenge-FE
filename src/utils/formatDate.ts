const formatDate = (date: string): string => {

    const dateFormatted = new Date(date);


    
    return `${dateFormatted.toLocaleDateString('pt-BR')} às ${dateFormatted.toLocaleTimeString('pt-BR')}`;
    
    
};

export default formatDate;