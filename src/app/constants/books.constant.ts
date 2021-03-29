import { MyBook, ReadingStatus } from '../types/MyBook.type'

export const BOOKS: MyBook[] = [
  {
    id: `OL30547670M`,
    startedTs: 1616331600000,
    status: ReadingStatus.READING,
  },
  {
    id: 'OL31987628M',
    startedTs: 1613257200000,
    endTs: 1615503600000,
    status: ReadingStatus.READ,
  },
  {
    id: `OL31683609M`,
    startedTs: 1611961200000,
    endTs: 1612652400000,
    status: ReadingStatus.READ,
  },
  {
    id: `OL27558783M`,
    startedTs: 1609542000000,
    endTs: 1611442800000,
    status: ReadingStatus.READ,
  },
]
