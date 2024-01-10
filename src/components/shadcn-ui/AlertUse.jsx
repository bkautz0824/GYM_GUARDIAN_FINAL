import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertUse() {
  return (
    <Alert>
        {/* <Terminal className="w-4 h-4" /> */}
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            You can add components and dependencies to your app using the cli.
        </AlertDescription>
    </Alert>

  )
}
