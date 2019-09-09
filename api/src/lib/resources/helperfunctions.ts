export function compare<T>(first : T, second : T) : number{
    if (first === second){
        return 0;
    } else if (first < second){
        return -1;
    } else {
        return 1;
    }
}