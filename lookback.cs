public partial class Form1 : Form
{
    public Form1() 
    {
        İnitializeComponent();
    }

    pravite void Form1_Load(object sender,EventArgs e)
    {

    }
    
    İmage resim;
    private void btnResimSec_Click(object sender,EventArgs e)
    {
        OpenFileDialog ofd = new OpenFileDialog();
        ofd.ShowDialog();
        resim = İmage.FormFile(ofd.FileName);
        pbAsil.İmage = resim;
    }


    private void btnDonustur_Click(object sender,EventArgs e)
    {
        Bitmap btp = (Bitmap)resim;
        pbGri.İmage = resimGriYap2(btp);

        //bu kısım uzun yollu metodu çağırır
        //pbGri.İmage= resimGriYap(resim);
    }

    public İmage resimGriYap(İmage img)
    {
        Bitmap bmp = (Bitmapt)img;
        for (int y = 0; y  )
    }
