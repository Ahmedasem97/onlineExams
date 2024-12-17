// Get All Subject
export interface ResSubjects {
    metadata: Metadata,
    subjects: ObjectSubjects[]
}
export interface ObjectSubjects {
    _id: string,
    name: string,
    icon: string,
}

export interface AllResSubjects {
    message: string,
    metadata: Metadata,
    subjects: AllobjectSubjects[]
}

export interface AllobjectSubjects {
    _id: string,
    name: string,
    icon: string,
    createdAt: string
}

export interface Metadata {
    currentPage: number,
    numberOfPages: number,
    limit: number
}
// ****************************

// Get Single Subject

export interface  AllSingleSubject{
    message: string,
    category: {
        _id: string,
        name: string,
        icon: string,
        createdAt: string
    }
}

export interface  SingleSubject{
    category: {
        _id: string,
        name: string,
        icon: string,
    }
}


