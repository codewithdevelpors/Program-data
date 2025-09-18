import turtle
import colorsys
import time

# Setup turtle and screen
t = turtle.Turtle()
screen = turtle.Screen()
screen.bgcolor('black')
t.speed(0)

# Countdown text turtle
countdown = turtle.Turtle()
countdown.hideturtle()
countdown.color("white")
countdown.penup()
countdown.goto(0, 0)
countdown.speed(0)

# Countdown display
for sec in range(15, 0, -1):
    countdown.clear()
    countdown.write(f"Starting in {sec}...", align="center", font=("Arial", 24, "bold"))
    screen.update()
    time.sleep(1)

countdown.clear()
screen.update()

# Begin drawing
n = 70
h = 0

for i in range(360):
    c = colorsys.hsv_to_rgb(h, 1, 0.8)
    h += 1/n
    t.color(c)
    t.left(1)
    t.forward(1)
    for j in range(2):
        t.left(2)
        t.circle(100)
