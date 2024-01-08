import DefaultLayout from '@/components/Layouts/Default'
import Hero from "@/components/Hero/Hero";
import '@/components/Hero/hero.css'
import SectionContainer from "@/components/Layouts/SectionContainer";
import React from "react";
import Marquee from "@/components/Marquee";
import dynamic from "next/dynamic";
import TimedTabsSection from "@/components/Sections/TimedTabsSection";

const pageData = {
    title: (
        <>
            <span className="heading-gradient">Simple yet</span>
            <br/>
            <span className="text-brand">powerful APIs</span>
        </>
    ),
    paragraph: 'Easy-to-use client libraries for managing and querying vector stores in Postgres.',
    cta: {
        label: 'Explore documentation',
        link: '/docs/guides/ai/vecs-python-client',
    },
    tabs: [
        {
            label: 'Store',
            paragraph: 'Efficiently upsert millions of vectors with important metadata.',
            colabUrl:
                'https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/images/cnn.ipynb?hl=ru',
            code: `
import tensorflow as tf

from tensorflow.keras import datasets, layers, models
import matplotlib.pyplot as plt
            
(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# Normalize pixel values to be between 0 and 1
train_images, test_images = train_images / 255.0, test_images / 255.0

class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']
               
model = models.Sequential()
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu')) 
model.summary()

model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

history = model.fit(train_images, train_labels, epochs=10, 
                    validation_data=(test_images, test_labels))           
            `,
        },
        {
            label: 'Index',
            paragraph:
                'Build indexes using Cosine distance, L2-Norm distance, or Max Inner Product for fast and efficient querying.',
            colabUrl:
                'https://colab.research.google.com/github/supabase/supabase/blob/master/examples/ai/vector_hello_world.ipynb',
            code: `
# get an existing collection
docs = vx.get_collection(name="docs")

# index the collection to be queried by cosine distance
docs.create_index(measure=vecs.IndexMeasure.cosine_distance)

# Available options for query measure are:
#
# vecs.IndexMeasure.cosine_distance
# vecs.IndexMeasure.l2_distance
# vecs.IndexMeasure.max_inner_product

# or use the default (cosine_distance)
docs.create_index()
      `,
        },
        {
            label: 'Query',
            paragraph: 'Efficient querying and filtering of results based on vector metadata.',
            colabUrl:
                'https://colab.research.google.com/github/supabase/supabase/blob/master/examples/ai/vector_hello_world.ipynb',
            code: `
# get an existing collection
docs = vx.get_collection(name="docs")

# Query vectors with optional Metadata Filtering
docs.query(
    query_vector=[0.4,0.5,0.6],
    filters={"year": {"$eq": 2012}}, # metadata filters
)
      `,
        },
    ],
}

const useCasesSection = {
    title: (
        <>
            <span className="heading-gradient">What you can build</span>
            <br/>
            <span className="heading-gradient">with CNNs?</span>
        </>
    ),
    paragraph: 'Scale effortlessly from experimentation to production-ready AI applications.',
    useCases: [
        {
            icon: `
          M3 12V15C3 16.6569 6.13401 18 10 18C13.866 18 17 16.6569 17 15V12C17 13.6569 13.866 15 10 15C6.13401 15 3 13.6569 3 12Z
          M3 7V10C3 11.6569 6.13401 13 10 13C13.866 13 17 11.6569 17 10V7C17 8.65685 13.866 10 10 10C6.13401 10 3 8.65685 3 7Z
          M17 5C17 6.65685 13.866 8 10 8C6.13401 8 3 6.65685 3 5C3 3.34315 6.13401 2 10 2C13.866 2 17 3.34315 17 5Z
        `,
            title: 'Classifying Objects in Images',
            description: 'CNNs excel in identifying and categorizing objects within images, such as distinguishing between cats and dogs or recognizing handwritten digits.',
        },
        {
            icon: 'M18 10C18 13.866 14.4183 17 10 17C8.50836 17 7.11208 16.6428 5.91677 16.0208L2 17L3.3383 13.8773C2.4928 12.7673 2 11.434 2 10C2 6.13401 5.58172 3 10 3C14.4183 3 18 6.13401 18 10ZM7 9H5V11H7V9ZM15 9H13V11H15V9ZM9 9H11V11H9V9Z',
            title: 'Locating and Identifying Multiple Objects',
            description: 'CNNs can precisely detect and label various objects within an image, enabling applications like self-driving cars to identify pedestrians, vehicles, and traffic signs.',
        },
        {
            icon: `M6 2C4.89543 2 4 2.89543 4 4V9.52779C5.06151 8.57771 6.46329 8 8 8C11.3137 8 14 10.6863 14 14C14 15.5367 13.4223 16.9385 12.4722 18H14C15.1046 18 16 17.1046 16 16V7.41421C16 6.88378 15.7893 6.37507 15.4142 6L12 2.58579C11.6249 2.21071 11.1162 2 10.5858 2H6Z
        M4 14C4 11.7909 5.79086 10 8 10C10.2091 10 12 11.7909 12 14C12 16.2091 10.2091 18 8 18C7.25862 18 6.56362 17.7977 5.96818 17.446L4.70711 18.7071C4.31658 19.0976 3.68342 19.0976 3.29289 18.7071C2.90237 18.3166 2.90237 17.6834 3.29289 17.2929L4.55397 16.0318C4.20229 15.4364 4 14.7414 4 14ZM8 12C6.89543 12 6 12.8954 6 14C6 14.5526 6.22276 15.0512 6.58579 15.4142C6.94881 15.7772 7.44744 16 8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12Z
        `,
            title: 'Authenticating Individuals from Images',
            description: 'CNNs power facial recognition systems by analyzing facial features, allowing for secure access control, identity verification, and personalized user experiences.',
        },
        {
            icon: `
          M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z
          M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z
          M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z
        `,
            title: 'Assisting Diagnostics through Imaging',
            description:
                'CNNs aid in medical diagnosis by analyzing MRI, CT scans, and X-rays, helping to detect abnormalities like tumors or anomalies in medical images.',
        },
        {
            icon: 'M4 7C4 5.34315 5.34315 4 7 4H12C12.2985 4 12.5656 4.12956 12.7503 4.33882C12.764 4.35438 12.7782 4.36952 12.7929 4.38419L19.7671 11.3584C19.9131 11.5326 20 11.755 20 12C20 12.2985 19.8704 12.5656 19.6612 12.7503C19.6456 12.764 19.6305 12.7782 19.6158 12.7929L12.6416 19.7671C12.4674 19.9131 12.245 20 12 20C11.755 20 11.5326 19.9131 11.3584 19.7671L4.36217 12.7709L4.33882 12.7503C4.12956 12.5656 4 12.2985 4 12V7ZM7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H7.01C7.56228 8 8.01 7.55228 8.01 7C8.01 6.44772 7.56228 6 7.01 6H7Z',
            title: 'Analyzing Video Content',
            description: 'CNNs can process video frames to recognize actions, track objects, and understand content for applications in surveillance, video summarization, and content moderation.',
        },
        {
            icon: 'M11 4C11 3.44772 10.5523 3 10 3V3.66667C10 4.74852 9.64911 5.80119 9 6.66667L7.6 8.53333C7.21053 9.05262 7 9.68422 7 10.3333V15.7639C7 16.1427 7.214 16.489 7.55279 16.6584L7.60263 16.6833C8.01919 16.8916 8.47854 17 8.94427 17H14.3604C14.8371 17 15.2475 16.6635 15.341 16.1961L16.541 10.1961C16.6647 9.57732 16.1914 9 15.5604 9H11V4ZM3.5 10C3.22386 10 3 10.2239 3 10.5V16.5C3 16.7761 3.22386 17 3.5 17C3.77614 17 4 16.7761 4 16.5V10.5C4 10.2239 3.77614 10 3.5 10Z',
            title: 'Creating Artistic Content',
            description: 'CNNs are used in generative models like style transfer and image synthesis, enabling the creation of artwork, altering image styles, and generating realistic visuals.',
        },
    ],
}

const img = [
    {
        "title": "Введение в свёрточные нейронные сети",
        "label": "Введение",
        "img_url": "/img/ai_presentation.png",
        "text": "Сверточной называют вид нейронной сети, специализирующейся на обработке изображений и видео. Такие сети подходят для улавливания локального контекста, когда поток информации в пространстве не прерывается, т.е. ее носители находятся в непосредственной близости друг от друга.\n" +
            "\n" +
            "Например, на изображении пиксели расположены рядом и содержат такие визуальные данные, как яркость и цвет. Если нейронная сеть видит кошку в одном пикселе на фотографии или рисунке, это означает, что она видит ее и в соседних пикселях.\n" +
            "\n" +
            "Зачастую сверточные нейронные сети используются для решения двух задач: распознавания и классификации изображений. Так, они могут быть использованы на изображении кошки для определения ее цвета по большим фрагментам изображения или для определения оттенка ее глаз по маленьким фрагментам, а также для различения собак и кошек.",
        "url": ""
    },
    {
        "title": "The structure of convolutional neural networks",
        "label": "Структура",
        "img_url": "/img/img_1.png",
        "text": "По своей структуре сверточные нейронные сети – это воронка: все начинается с картины в целом, затем внимание переключается на отдельные детали. Мозг работает точно так же: человек на улице видит сначала кошку и лишь потом начинает рассматривать цвет ее шерсти и глаз. Это называется репрезентативным обучением (обучение представлениям).",
        "url": ""
    },
    {
        "title": "Application of convolutional neural networks",
        "label": "Usages",
        "img_url": "/img/img_2.png",
        "text": (<>
            В 2010-е годы искусственные сверточные нейронные сети имели широкое использование в медицине и государственных учреждениях.<br/> В настоящее время сверточные нейронные сети применяются в системах видеонаблюдения, видеоаналитики и беспилотных автомобилях. Например, камеры в комплексе с такими сетями помогают роботам компании «Яндекс» и беспилотным такси понимать, что происходит на дороге. <br/>Другой популярной областью применения принципа работы сверточных нейронных сетей является генеративное искусство. Когда человек вводит запрос, нейронная сеть генерирует на его основе изображение. Преобразование текста является задачей различных алгоритмов, а генерация изображения – сверточных нейронных сетей. Наиболее распространенными моделями для генерации изображений являются такие сверточные нейронные сети, как Midjourney, Stable Diffusion, Dream, DALL-E 2 и ruDALL-E.
        </>),
        "url": ""
    },
    {
        "title": "Advantages of convolutional neural networks",
        "label": "Преимущества",
        img_url: "/img/2D_Convolution_Animation.gif",
        "text": "They can work effectively with images and videos due to their ability to capture local spatial dependencies in the data. They are also more efficient because the number of training parameters can be reduced by separating them.",
        "url": ""
    }
]

const ImageCarousel = dynamic(() => import("@/components/Carousels/ImageCarousel"), {ssr: false})
const UseCasesSection = dynamic(() => import('@/components/Sections/UseCasesSection'))

const Index = () => (
    <DefaultLayout>
        <Hero/>
        <SectionContainer className="pt-16 pb-0">
            <ImageCarousel
                content={img}
                altTabView={false}
            />
        </SectionContainer>
        <UseCasesSection {...useCasesSection} />
        <TimedTabsSection {...pageData}/>
        <Marquee/>
    </DefaultLayout>
)

export default Index;