
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

t = turtle.Turtle()
t.speed(0)
t.pensize(2)
t.color("white")

for i in range(50):
    for _ in range(3):
        t.forward(i * 5)
        t.left(120)
    t.left(5)

t.hideturtle()
turtle.done()
