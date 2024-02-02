'use client'
import {
	Tabs,
	Tab,
	Input,
	Link,
	Button,
	Card,
	CardBody,
	CardHeader,
} from '@nextui-org/react'
import { useState } from 'react'
export default function App() {
	return (
		<div>
			<p className='text-5xl my-10 text-center'>Adminify backend form</p>
			<div className='flex flex-col w-full items-center'>
				<Card className='max-w-full w-[500px]'>
					<CardBody className='overflow-hidden'>
						<form className='flex flex-col gap-4'>
							<Input
								isRequired
								label='Name'
								placeholder='Enter company name'
								type='text'
							/>
							<Input
								isRequired
								label='openAi Api Key'
								placeholder='Enter your openAi api key'
								type='text'
							/>
							<Input
								isRequired
								label='openAi Prompt'
								placeholder='Enter your openAi prompt'
								type='text'
							/>
							<Input
								isRequired
								label='Go High Level Access Token'
								placeholder='Enter your go high level access token'
								type='text'
							/>
							<Input
								isRequired
								label='Go High Level Refresh Token'
								placeholder='Enter your go high level refresh token'
								type='text'
							/>
							<Input
								isRequired
								label='Go High Level Client ID'
								placeholder='Enter your go high level client id'
								type='text'
							/>
							<Input
								isRequired
								label='Go High Level Client Secret'
								placeholder='Enter your go high level client secret'
								type='text'
							/>
							<Input
								isRequired
								label='Go High Level Location ID'
								placeholder='Enter your go high level location id'
								type='text'
							/>
							<Input
								isRequired
								label='Ai Recent Message Count Threshold'
								placeholder='Enter your ai recent message count threshold'
								type='text'
							/>
							<Input
								isRequired
								label='Timezone'
								placeholder='Enter your timezone'
								// TODO: Add type

								type='text'
							/>

							<div className='flex gap-2 justify-end'>
								<Button fullWidth color='primary'>
									Add company to database
								</Button>
							</div>
						</form>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}
