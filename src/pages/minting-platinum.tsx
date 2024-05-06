import LayoutMinting from '@/components/layout/layout-minting';
import useDocumentTitle from '@/hooks/useDocumentTitle';

export default function MintingPlatinum() {
  useDocumentTitle('Specta Trading - Platinum');

  return <LayoutMinting variant="platinum" />;
}
