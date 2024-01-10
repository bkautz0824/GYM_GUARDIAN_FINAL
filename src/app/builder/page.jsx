
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
import { workouts } from '@/data/WorkoutData'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import UserWorkout from "@/components/helpers/UserWorkout"


export default async function Builder() {
    const session = await getServerSession()
    
    if(!session || !session.user){
        redirect("/api/auth/signin")
    }

    
  return (
    <>
     <Card className={`flex m-to items-center justify-center h-screen mb-12 bg-fixed bg-center bg-img bg-no-repeat bg-cover max-sm:mx-2`}>
        
        <Card className="items-center shadow-2xl bg-primary shadow-primary max-sm:ml-4">
            <CardHeader>
                <TypographyH1 text={'Builder'}/>
                <TypographyP text={"Use this page to start building your own workout!"}/>
                <TypographyMuted text={"Scroll down to view current workout..."}/>
            </CardHeader>
          
        </Card>
     
        <CardContent>
            <div className="p-4 space-x-4 ">
                <Card className="p-4 shadow-2xl bg-primary shadow-primary">
                    <TypographyH3 text={"Select area of focus..."} />
                </Card>
                
                {
                workouts.map((item) => {
                    return(
                        <div className='flex justify-center m-4 ' key={item.id}>
                         <Link 
                            href={{
                                pathname: `builder/${item.muscle_group}`,
                                query: {
                                    exercises: item.exercises
                                }
                            } }
                      
                            className={buttonVariants({ variant: "secondary" }) + "text-secondary hover:shadow-xl hover:shadow-primary hover:bg-secondary/80"}
                            >{item.muscle_group}
                        </Link>
                        </div>
                   
                    )
                })
            }
            </div>
        </CardContent>
    </Card>
    <UserWorkout sessionData={session} />
    </>
   
  )
}
