import Client from 'assets/image/background/client.jpg';

export const ContainerImage = {
    height: '90vh',
    marginBottom: 20,
    backgroundImage: `url(${Client})`,
    display: 'flex',
    justifyContent: 'left',
    alignItems: "flex-end"
}

export const PaperClient = {
    width: '45vw',
    height: '70vh',
    marginLeft: 30,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export const ReviewTitle = {
    borderBottom: '1px solid #F65D4E',
    paddingBottom: 10,
    fontWeight: 800
}

export const SubCaption = {
    display: 'flex',
    position: 'absolute',
    left: '10.5rem'

}