
import turtle
import time

screen = turtle.Screen()
screen.bgcolor('black')
screen.title("Turtle Art with Countdown")

counter = turtle.Turtle()
counter.hideturtle()
counter.color("white")
counter.penup()
counter.goto(0, 0)

def countdown(seconds):
    for i in range(seconds, 0, -1):
        counter.clear()
        counter.write(f"Starting in {i}...", align="center", font=("Arial", 24, "bold"))
        time.sleep(1)
    counter.clear()
    counter.write("Let's go!", align="center", font=("Arial", 24, "bold"))
    time.sleep(1)
    counter.clear()

countdown(15)

import colorsys
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

h = 0
for i in range(360):
    c = colorsys.hsv_to_rgb(h, 1, 1)
    t.pencolor(c)
    t.forward(i * 0.5)
    t.right(59)
    h += 0.002

t.hideturtle()
turtle.done()
