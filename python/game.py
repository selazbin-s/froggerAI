import pygame
import random
import time

pygame.init()
test = 350
screen_height = 400

white = (255, 255, 255)

finish = False 
fps = 20 
frogNum = 100 

screen = pygame.display.set_mode((test, screen_height))
pygame.display.set_caption('Frogger-AI-bot')
clock = pygame.time.Clock()

all_sprites = pygame.sprite.Group()
backgroundImage = pygame.image.load('./images/backgroundtest.png')

frogs = pygame.sprite.Group()

frog = pygame.image.load('./images/frogAlive.gif')
frogDead = pygame.image.load('./images/frogDead.gif')

carRed = pygame.image.load('./images/carRed.png') 
carBlue = pygame.image.load('./images/carBlue.png')  
carYellow = pygame.image.load('./images/carYellow.png')
carGreen = pygame.image.load('./images/carGreen.png') 


log = pygame.image.load('./images/logtest.gif')
lilyPad = pygame.image.load('./images/lilypad.png')
loglog = pygame.image.load('./images/logtest.gif')

class Pop:
    mostFitFrog = 0  
    frogsFitness = 0 
    frogsAlive = frogNum  
    endGame = False 
    generation = 1 

    def __init__(self, alive, size):
        self.size = size 
        self.alive = alive
        self.random()

    
    def random(self):
        for i in range(0, self.alive):
            directions = []
            for z in range(0, self.size):
                numberRandom = random.randint(0, 4)
                directions.append(numberRandom)

            dir = FrogDirections(1000, directions)
            frogs.add(Frog(167.5, 350, self.size, dir))

    
    def setFit(self):
        sum = 0
        for frog in frogs:
            sum += frog.fitness
        self.frogsFitness = sum

  
    def parent(self):
        self.setFit()
        rand = random.randint(frogNum, self.frogsFitness)
        runningSum = 0
        for frog in frogs:
            runningSum += frog.fitness
            if runningSum >= rand:
                return frog.brain.directions


    def select(self):
        best = list(self.bestFromPrev())
        newFrogs = []
        if (self.endGame == False):
            dir = list(best)
            newDir = FrogDirections(1000, dir)
            newFrogs.append(Frog(167.5, 350, self.size, newDir)) 

            for x in range(1, frogNum):
                dir = list(self.parent())
                newDir = FrogDirections(1000, vectorMut(dir))
                newFrogs.append(Frog(167.5, 350, self.size, newDir))
            Pop.frogsAlive = frogNum

            frogs.empty()
            for frog in newFrogs:
                frogs.add(frog)
        else:
            frogs.empty()
            for x in range(0, 1):
                dir = list(best)
                directions = FrogDirections(1000, dir)
                frogs.add(Frog(167.5, 350, self.size, directions))
            Pop.frogsAlive = 1

    
    def bestFromPrev(self):
        if (self.endGame == False):
            sortedFrogs = []
            for frog in frogs:
                sortedFrogs.append(frog)

            sortedFrogs.sort(key = lambda frog: frog.fitness) 

            best = frogNum - 1
            for i in range(0, frogNum - 1):
                if sortedFrogs[i].brain.step < sortedFrogs[frogNum - 1].brain.step and sortedFrogs[i].fitness == sortedFrogs[frogNum - 1].fitness:
                    best = i

            if (sortedFrogs[best].fitness == 13):
                self.endGame = True
            else:
                self.generation += 1

            for frog in frogs:
                if (sortedFrogs[best].fitness == frog.fitness and sortedFrogs[best].brain.step == frog.brain.step):
                    bestFromPrev = list(frog.brain.directions)
                    break
            return bestFromPrev
        else:
            for frog in frogs:
                bestFromPrev = list(frog.brain.directions)
            return bestFromPrev



class Car(pygame.sprite.Sprite):
    def __init__(self, startX, startY, img, speed, direction, width, height):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.Surface((width, height))
        self.rect = self.image.get_rect()
        self.rect.x = startX
        self.rect.y = startY
        self.img = img
        self.speed = speed
        self.direction = direction  
        self.width = width
        self.height = height

        if (self.img == 'carRed'):
            self.image = carRed
        elif (self.img == 'carYellow'):
            self.image = carYellow
        elif (self.img == 'carGreen'):
            self.image = carGreen
        elif (self.img == 'carBlue'):
            self.image = carBlue


    def update(self):
        if (self.direction == -1):
            self.rect.x += self.speed
        elif (self.direction == 1):
            self.rect.x -= self.speed

        if (self.direction == -1 and self.rect.x - 75 > test):
            self.rect.x = -75
        elif (self.direction == 1 and self.rect.x + 75 < 0):
            self.rect.x = test + 75
        self.crash()


    def crash(self):
        for f in frogs:
            if (self.rect.colliderect(f) and f.dead == False):
                f.die()

class Log(pygame.sprite.Sprite):
    def __init__(self, startX, startY, size, width, height, speed):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.Surface((width, height))
        self.rect = self.image.get_rect()
        self.rect.x = startX
        self.rect.y = startY
        self.size = size
        self.width = width
        self.height = height
        self.speed = speed

        if (self.size == 'log'):
            self.image = log
        elif (self.size == 'long'):
            self.image = lilyPad
        elif (self.size == 'medium'):
            self.image = loglog



    def update(self):
        self.rect.x += self.speed

        if (self.size == 'log' or self.size == 'medium'):
            if (self.rect.x - 100 > test):
                self.rect.x = -100
        else:
            if (self.rect.x - 200 > test):
                self.rect.x = -200

        self.crash()


    def crash(self):
        for f in frogs:
            if f.rect.colliderect(self) and f.dead == False:
                f.rect.x += self.speed

class Frog(pygame.sprite.Sprite):
    dead = False
    fitness = 0

    def __init__(self, xpos, ypos, size, brain):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.Surface((25, 25))
        self.rect = self.image.get_rect()
        self.rect.x = xpos
        self.rect.y = ypos
        self.size = size
        self.brain = brain
        self.image = frog


    def update(self):
        stepNum = self.brain.step
        if stepNum < self.size and self.dead == False:
            if self.brain.directions[stepNum] == 1:
                self.rect.y -= 30
                self.fitness += 1
            elif self.brain.directions[stepNum] == 2 and self.rect.y < 375:
                self.rect.y += 30
                self.fitness -= 1
            elif self.brain.directions[stepNum] == 3 and self.rect.x > 25:
                self.rect.x -= 25
            elif self.brain.directions[stepNum] == 4 and self.rect.x < 300:
                self.rect.x += 25

            self.brain.step += 1


        if self.rect.y <= 175 and self.rect.y != 50 and self.dead == False:
            onLog = False
            for x in all_sprites:
                if x.rect.colliderect(self):
                    onLog = True
                    break
            if onLog == False:
                self.die()
        elif self.rect.y == 50 and self.dead == False:
            self.fitness = 13 
            self.dead = True 
            Pop.frogsAlive -= 1


    def die(self):
        self.image = frogDead
        self.dead = True
        Pop.frogsAlive -= 1

class FrogDirections:
    step = 0
    def __init__(self, size, directions):
        self.size = size
        self.directions = directions





def vectorMut(d):
    for i in range(0, len(d)):
        numberRandom = random.randint(0, 4)
        if numberRandom == 1:
            d[i] = random.randint(0, 4)
    return d

def textObj(text, font):
    textSurface = font.render(text, True, white)
    return textSurface, textSurface.get_rect()

def messageObj(text, position):
    largeText = pygame.font.Font('freesansbold.ttf', 16) 
    TextSurf, TextRect = textObj(text, largeText)
    TextRect.center = ((test / 2), 10 + position)
    screen.blit(TextSurf, TextRect)


def set():
    for a in all_sprites:
        a.kill()

  
    for i in range(0, 9):
        if i < 3:
            all_sprites.add(Log(-100 + 150 * (3 - i), 130, 'log', 62.5, 25, 3)) 
        elif i < 6:
            all_sprites.add(Log(-150 + 200 * (6 - i), 80, 'long', 150, 25, 4))
        else:
            all_sprites.add(Log(-200 + 150 * (9 - i), 45, 'medium', 87.5, 25, 6))
    for i in range(0, 12):
        if i < 3:
            all_sprites.add(Car(100 + 75 * (3 - i), 325, 'carRed', 6, 1, 25, 25))
        elif i < 6:
            all_sprites.add(Car(-150 + 75 * (6 - i), 290, 'carBlue', 2, -1, 25, 25))
        elif i < 10:
            all_sprites.add(Car(25 + 75 * (10 - i), 250, 'carYellow', 10, 1, 25, 25))
        else:
            all_sprites.add(Car(50 + 150 * (12 - i), 210, 'carGreen', 3, -1, 50, 25))

pop = Pop(frogNum, 1000) 
set()


while not finish:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            finish = True

    screen.blit(backgroundImage, (0, 0))


    if (Pop.frogsAlive == 0):
        pop.select()
        set()
        time.sleep(2.5) 

    messageObj('Attempt: ' + str(pop.generation), 0)
    messageObj('Still Standing: ' + str(pop.frogsAlive), 18)
    all_sprites.update()
    all_sprites.draw(screen)
    frogs.update()
    frogs.draw(screen)

    pygame.display.update()
    clock.tick(fps)

pygame.quit()
quit()
