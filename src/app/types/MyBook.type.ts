export enum ReadingStatus {
  READING = 'reading',
  READ = 'read',
  CANCELED = 'canceled',
}

export interface MyBook {
  id: string
  startedTs: number
  endTs?: number
  status: ReadingStatus
}
