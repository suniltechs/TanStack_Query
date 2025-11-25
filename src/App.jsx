import React from 'react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import Test from './Test'
import Test2 from './Test2'

const App = () => {

  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <Test />
      <Test2 />
    </QueryClientProvider>
  )
}

export default App