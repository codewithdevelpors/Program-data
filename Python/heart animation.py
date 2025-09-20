import turtle
import time

# Setup screen
screen = turtle.Screen()
screen.bgcolor('black')
screen.title("Heart Drawing with Countdown")

# Countdown Turtle
counter = turtle.Turtle()
counter.hideturtle()
counter.color("white")
counter.penup()
counter.goto(0, 0)
counter.write("Starting in 15...", align="center", font=("Arial", 24, "bold"))

# Countdown on Turtle screen
def countdown(seconds):
    for i in range(seconds, 0, -1):
        counter.clear()
        counter.write(f"Starting in {i}...", align="center", font=("Arial", 24, "bold"))
        time.sleep(1)
    counter.clear()
    counter.write("Let's go!", align="center", font=("Arial", 24, "bold"))
    time.sleep(1)
    counter.clear()

# Heart drawing function
def draw_heart():
    turtle.speed(5)
    turtle.pensize(5)
    turtle.color('red', 'red')
    turtle.begin_fill()

    turtle.left(140)
    turtle.forward(111.65)
    curve()
    turtle.left(120)
    curve()
    turtle.forward(111.65)
    turtle.end_fill()

# Curve drawing function
def curve():
    for _ in range(200):
        turtle.right(1)
        turtle.forward(1)

# Run countdown
countdown(15)

# Draw the heart
draw_heart()

# Finish
turtle.hideturtle()
turtle.done()
