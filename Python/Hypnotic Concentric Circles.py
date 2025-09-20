# Python program to draw hypnotic concentric circles using Turtle graphics.
# This creates a mesmerizing visual effect by drawing circles of increasing size
# with changing colors and subtle position shifts.

import turtle
import colorsys
import time

# Setup turtle
t = turtle.Turtle()
s = turtle.Screen()
s.bgcolor('black') # Black background
t.speed(0)         # Fastest drawing speed
t.pensize(2)       # Pen thickness

# Countdown before starting
t.penup()
t.goto(0, 0)
t.color("white")
style = ("Arial", 20, "bold")
for i in range(15, 0, -1):
    t.clear()
    t.write(f"Starting in {i} seconds...", align="center", font=style)
    time.sleep(1)
t.clear()

# Drawing parameters
num_circles = 100      # Number of circles to draw
initial_radius = 5     # Starting radius
radius_increment = 3   # Radius step
offset_x = 0.5         # Small X offset
offset_y = 0.5         # Small Y offset
h = 0                  # Initial hue

t.penup()
t.goto(0, 0)
t.pendown()

# Draw hypnotic circles
for i in range(num_circles):
    c = colorsys.hsv_to_rgb(h, 1, 0.8)
    t.pencolor(c)
    current_radius = initial_radius + i * radius_increment

    t.penup()
    t.goto(offset_x * i, offset_y * i - current_radius)
    t.pendown()
    t.circle(current_radius)

    h += 1 / num_circles

# Keep window open
turtle.done()
