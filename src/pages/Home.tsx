import React from 'react'
import { TaskColumn } from '@/components/common'

export default function Home() {
  return (
    <div className='space-y-4 flex flex-grow overflow-x-auto overflow-y-hidden h-full relative'>
      <div className='absolute whitespace-nowrap space-x-4 h-full'>
        <TaskColumn title="backlog" />
        <TaskColumn title="Cancelled" />
        <TaskColumn title="Done" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="ToDo" />
      </div>
    </div>
  )
}
