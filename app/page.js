'use client'
import Card from './components/card.js'

export default function Home() {
  return (
    <div className="flex flex-wrap w-full justify-center px-[2%]">
      <Card tags={['python', 'programming', 'fun']} date={new Date()} title={"Introducing donut.py, the world's first donut.c clone in Python"} image={"/thumbnails/donutpy.png"}/>
      <Card tags={['programming', 'review']} date={new Date()} title={"Zed: The amazing Rust-based editor you've never heard of"} image={"/thumbnails/zed.png"}/>
      <Card tags={['python', 'programming', 'fun']} date={new Date()} title={"Introducing donut.py, the world's first donut.c clone in Python"} image={"/thumbnails/donutpy.png"}/>
      <Card tags={['programming', 'review']} date={new Date()} title={"Zed: The amazing Rust-based editor you've never heard of"} image={"/thumbnails/zed.png"}/>
      <Card tags={['python', 'programming', 'fun']} date={new Date()} title={"Introducing donut.py, the world's first donut.c clone in Python"} image={"/thumbnails/donutpy.png"}/>
      <Card tags={['programming', 'review']} date={new Date()} title={"Zed: The amazing Rust-based editor you've never heard of"} image={"/thumbnails/zed.png"}/>
      <Card tags={['python', 'programming', 'fun']} date={new Date()} title={"Introducing donut.py, the world's first donut.c clone in Python"} image={"/thumbnails/donutpy.png"}/>
      <Card tags={['programming', 'review']} date={new Date()} title={"Zed: The amazing Rust-based editor you've never heard of"} image={"/thumbnails/zed.png"}/>
    </div>
  )
}
