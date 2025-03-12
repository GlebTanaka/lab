from birds_v1 import Duck, Swan, Albatross  # Import the classes from birds.py


def main():
    duck = Duck()
    swan = Swan()
    albatross = Albatross()

    for bird in (duck, swan, albatross):
        bird.swim()
        bird.fly()


if __name__ == "__main__":
    main()