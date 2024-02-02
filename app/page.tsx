'use client'
import { Input, Card, CardBody } from '@nextui-org/react'
import { useRef } from 'react'
import { Button } from '@nextui-org/react'
export default function App() {
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	const handleConfetti = async () => {
		const { clientWidth, clientHeight } = document.documentElement
		const boundingBox = buttonRef.current?.getBoundingClientRect?.()

		const targetY = boundingBox?.y ?? 0
		const targetX = boundingBox?.x ?? 0
		const targetWidth = boundingBox?.width ?? 0

		const targetCenterX = targetX + targetWidth / 2
		const confetti = (await import('canvas-confetti')).default

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 70,
			origin: {
				y: targetY / clientHeight,
				x: targetCenterX / clientWidth,
			},
		})
	}
	return (
		<div className='px-4'>
			<p className='text-5xl my-10 text-center'>Adminify Backend Form</p>
			<div className='flex flex-col w-full items-center'>
				<Card className='max-w-full w-[500px]'>
					<CardBody className='overflow-hidden'>
						<form className='flex flex-col gap-4'>
							<Input isRequired label='Name' type='text' />
							<Input isRequired label='openAi Api Key' type='text' />
							<Input isRequired label='openAi Prompt' type='text' />
							<Input
								isRequired
								label='Go High Level Access Token'
								type='text'
							/>
							<Input
								isRequired
								label='Go High Level Refresh Token'
								type='text'
							/>
							<Input isRequired label='Go High Level Client ID' type='text' />
							<Input
								isRequired
								label='Go High Level Client Secret'
								type='text'
							/>
							<Input isRequired label='Go High Level Location ID' type='text' />
							<Input
								isRequired
								label='Ai Recent Message Count Threshold'
								type='text'
							/>
							<Input
								isRequired
								label='Timezone'
								// TODO: Add type
								type='text'
							/>

							<div className='flex gap-2 justify-end'>
								<Button
									color='primary'
									fullWidth
									ref={buttonRef}
									disableRipple
									className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl  after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
									size='lg'
									onPress={handleConfetti}
								>
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
